import Link from 'next/link'
import clsx from 'clsx'


const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-yellow-400 font-medium text-zinc-900 hover:bg-yellow-500 active:bg-yellow-400 active:text-zinc-900/60 dark:bg-pink-700 dark:text-zinc-300 dark:hover:bg-pink-800 dark:hover:text-zinc-50 dark:active:bg-pink-700 dark:active:text-zinc-50/70',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  );

  return href ? (
    <a href={href} download="Timothy Eichenlaub Resume.pdf" className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
