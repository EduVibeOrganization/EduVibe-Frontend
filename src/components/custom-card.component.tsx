import { Card } from 'primereact/card';

interface ICustomCard {
    title: string;
    subtitle?: string;
    content: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

export function CustomCard({title, subtitle, content, header, footer}: ICustomCard){
    return (
        <div>
            <Card title={title} subTitle={subtitle} header={header} footer={footer} className="md:w-25rem">
                {content}
            </Card>
        </div>
    );
}