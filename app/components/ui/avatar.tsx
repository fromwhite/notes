import React from "react";

interface Props {
  src?: string;
  stacked?: boolean;
  text?: string;
  isSquare?: boolean;
  className?: string;
}

type Attrs = Omit<
  Partial<React.ImgHTMLAttributes<any> & React.HTMLAttributes<any>>,
  keyof Props
>;
export type AvatarProps = Props & Attrs;

export const Avatar = ({
  src,
  stacked,
  text,
  isSquare,
  className,
  ...props
}: AvatarProps) => {
  return (
    <span className={`avator ${className}`}>
      {!text && (
        <img
          alt="avatar"
          className="avatar-img"
          src={src}
          draggable={false}
          {...props}
        />
      )}

      <style jsx>{`
        .avatar {
          display: inline-block;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--accents-2);
          border-radius: 50%;
          vertical-align: top;
          background-color: var(--geist-foreground);
          box-sizing: border-box;
          width: 30px;
          height: 30px;
          padding: 0;
          margin: 0;
        }

        .avatar-img {
          display: inline-block;
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          user-select: none;
        }

        .avatar-text {
          position: absolute;
          left: 50%;
          top: 50%;
          text-align: center;
          transform: translate(-50%, -50%) scale(0.65);
          white-space: nowrap;
          user-select: none;
        }
      `}</style>
    </span>
  );
};
