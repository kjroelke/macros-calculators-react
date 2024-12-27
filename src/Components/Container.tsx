import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/Components/ui/card';

interface ContainerProps {
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
}: ContainerProps) {
    return (
        <Card
            id={id}
            className={`p-7 rounded-2xl dark:border-primary-light border-primary border-2 overflow-hidden`}>
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
