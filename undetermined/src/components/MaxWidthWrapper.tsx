import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
    className, children
}: {
    className?: string
    children: ReactNode
}) => {




    return (
        <div className={cn('pl-2.5', className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper