import { useState } from 'react';
import { MultiSelect } from './ui/multi-select';
const frameworksList = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'ember', label: 'Ember' },
];
export const TagSelector = () => {
    const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

    const updatePassword = (e) => {
        e.preventDefault();

        console.log('Selected frameworks:', selectedFrameworks);
    };
    return (
        <MultiSelect
            options={frameworksList}
            onValueChange={setSelectedFrameworks}
            defaultValue={selectedFrameworks}
            placeholder="Seleccionar etiquetas"
            variant="inverted"
            animation={2}
            maxCount={8}
            createTagFunction={updatePassword}
        />
    );
};
