import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'
import { InviteWrapper, InviteInput, InviteBtn } from '@/components/Styles'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { inviteSchema, InviteType } from '../../common/schema/invite'
import { requireAdmin } from '@/common/protect'
import { trpc } from '../../common/trpc'
import { useToast } from '@/components/ui/toast'

export const getServerSideProps = requireAdmin(async (ctx) => {
  return { props: {} }
})

export default function Invite() {
  const { Toast } = useToast()
  const router = useRouter()
  const { handleSubmit, control, reset } = useForm<InviteType>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(inviteSchema),
  })

  const { mutateAsync, isLoading } = trpc.invite.useMutation()

  const onSubmit = useCallback(
    async (data: InviteType) => {
      try {
        const result = await mutateAsync(data)
        if (result.status === 201) {
          reset()
          Toast(result.message)
          // router.push('/')
          // router.push(`/invite/${result.result.token}`)
        }
      } catch (err) {
        Toast((err as { message: string }).message)
      }
    },
    [mutateAsync, router, reset]
  )

  return (
    <Layout>
      <InviteWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InviteInput
                type="email"
                placeholder="Type invite email"
                {...field}
              />
            )}
          />
          <InviteBtn disabled={isLoading} type="submit">
            Invite
          </InviteBtn>
        </form>
      </InviteWrapper>
    </Layout>
  )
}
