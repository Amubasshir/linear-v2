import classNames from 'classnames';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames('mx-auto max-w-[120rem] px-6', className)}>
      {children}
    </div>
  );
};
