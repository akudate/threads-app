"use client"

import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

interface ShareLinkProps {
  id: string;
}

const ShareLink: React.FC<ShareLinkProps> = ({ id }) => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const handleCopyLink = () => {
    // toast({
    //     title: 'Success',
    //     description: 'This is a success message.',
    //   });
    // Construct the URL to be copied
    const url = `/thread/${id}`;

    // Create a temporary input element to copy the URL to the clipboard
    const tempInput = document.createElement('input');
    tempInput.value = window.location.origin + url;
    document.body.appendChild(tempInput);
    tempInput.select();

    // Try to copy the URL to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Set a state variable to indicate that the link has been copied
    setCopySuccess(true);

    // Automatically hide the notification after 5 seconds
    setTimeout(() => {
      setCopySuccess(false);
    }, 5000);
  };

  return (
    <div>
      <img
        src='/assets/repost.svg'
        alt='heart'
        width={24}
        height={24}
        className='cursor-pointer object-contain'
        onClick={handleCopyLink}
      />
    </div>
  );
};

export default ShareLink;
