import React, { useState, KeyboardEvent } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface TagInputProps {
    tags: string[];
    setTags: (tags: string[]) => void;
    label: string;
    id: string;
    placeholder?: string;
}

const TagInput: React.FC<TagInputProps> = ({ tags, setTags, label, id, placeholder }) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if ((e.key === 'Enter' || e.key === ',') && inputValue.trim() !== '') {
            e.preventDefault();
            const newTag = inputValue.trim();
            if (newTag && !tags.includes(newTag)) {
                setTags([...tags, newTag]);
            }
            setInputValue('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div>
            <label htmlFor={id} className="block text-gray-300 mb-2">{label}</label>
            <div className="w-full bg-kubik-dark border border-gray-700 rounded-md p-2 text-white flex flex-wrap items-center gap-2 focus-within:border-kubik-purple">
                {tags.map(tag => (
                    <div key={tag} className="bg-kubik-gray text-kubik-purple/90 text-sm font-semibold px-2.5 py-1 rounded-full flex items-center gap-2">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="text-gray-400 hover:text-white">
                            <XMarkIcon className="w-4 h-4" />
                        </button>
                    </div>
                ))}
                <input
                    type="text"
                    id={id}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent flex-grow focus:outline-none p-1 min-w-[150px]"
                    placeholder={placeholder || "Add a tag and press Enter"}
                />
            </div>
        </div>
    );
};

export default TagInput;
