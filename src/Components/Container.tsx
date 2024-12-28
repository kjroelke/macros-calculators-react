import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/Components/ui/card';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
    cardTitle: string;
    cardDescription?: string;
    children?: React.ReactNode;
}

export default function Container({
    id,
    cardTitle,
    cardDescription,
    children,
    ...props
}: ContainerProps) {
    return (
        <Card
            {...props}
            id={id}>
            <CardHeader>
                <CardTitle className='text-2xl font-bold'>
                    <h2>{cardTitle}</h2>
                </CardTitle>
                {cardDescription && (
                    <CardDescription>{cardDescription}</CardDescription>
                )}
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}
