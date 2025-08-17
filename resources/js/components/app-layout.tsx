import { AppContent } from '@/components/app-content';
import { AppHeader } from '@/components/app-header';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { BreadcrumbItem } from '@/types';
import React from 'react';

interface AppLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    variant?: 'header' | 'sidebar';
}

export default function AppLayout({ children, breadcrumbs, variant = 'sidebar' }: AppLayoutProps) {
    if (variant === 'header') {
        return (
            <AppShell variant="header">
                <AppHeader />
                <AppContent>{children}</AppContent>
            </AppShell>
        );
    }

    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                </div>
            </SidebarInset>
        </AppShell>
    );
}