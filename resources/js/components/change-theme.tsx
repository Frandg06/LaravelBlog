import { useAppearance } from '@/hooks/use-appearance';
import { Button } from '@headlessui/react';
import { Moon, Sun } from 'lucide-react';

export const ChangeTheme = () => {
    const { appearance, updateAppearance } = useAppearance();

    return (
        <Button
            onClick={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')}
            className="border-borde cursor-pointer rounded-md border p-2"
        >
            {appearance === 'dark' ? <Sun className="text-foreground/60 size-4" /> : <Moon className="text-foreground/60 size-4" />}
        </Button>
    );
};
