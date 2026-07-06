export default function Logo({ className = '', size = 36 }) {
  return (
    <img
      src="/images/logo.png"
      alt="Tilo"
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
      loading="eager"
    />
  )
}
