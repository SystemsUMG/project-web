import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Activity, Users, DollarSign } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/stats-card';
import { SalesChart } from '@/components/dashboard/sales-chart';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <StatsCard
                        title="Ingresos Totales"
                        value="$45,231.89"
                        change="+20.1% desde el mes pasado"
                        icon={DollarSign}
                        isLoading={isLoading}
                    />
                    <StatsCard
                        title="Usuarios Activos"
                        value="+573"
                        change="+201 nuevos este mes"
                        icon={Users}
                        isLoading={isLoading}
                    />
                    <StatsCard
                        title="Actividad"
                        value="+12.5%"
                        change="+4% desde la semana pasada"
                        icon={Activity}
                        isLoading={isLoading}
                    />
                </div>
                <SalesChart />
            </div>
        </AppLayout>
    );
}
