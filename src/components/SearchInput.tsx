import { TextInput, createStyles } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';

type SearchInputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: (value: string) => void; // new prop for search action
};

const useStyles = createStyles(() => ({
    pointer: {
        cursor: 'pointer',
    },
}));

const SearchInput = ({ value, onChange, onSearch }: SearchInputProps) => {
    const { classes, cx } = useStyles();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(value);
        }
    };

    return (
        <TextInput
            className={classes.pointer}
            mx="auto"
            w={350}
            mb={20}
            placeholder="Search for characters..."
            radius="md"
            size="lg"
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            rightSection={<IconSearch color='cyan' size="1.7rem" onClick={() => onSearch(value)} />}
            rightSectionWidth={50}
        />
    );
};
export default SearchInput;