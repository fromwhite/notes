const { execSync } = require('child_process')

function checkRustEnvironment() {
  try {
    execSync('rustc --version')
    console.log('Rust environment is available.')
  } catch (error) {
    console.error('Rust environment is not available.')
    installRust()
    return
  }

  checkRustUpdate()
}

function installRust() {
  try {
    console.log('Installing Rust...')
    execSync("curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh")
    console.log('Rust installation successful.')
  } catch (error) {
    console.error('Failed to install Rust.')
    process.exit(1)
  }
}

function checkRustUpdate() {
  try {
    console.log('Checking Rust update...')
    execSync('rustup update')
    console.log('Rust is up to date.')
  } catch (error) {
    console.error('Failed to check Rust update.')
    process.exit(1)
  }
}

checkRustEnvironment()
