import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'hpwyh76p',
    dataset:'production',
    apiVersion: '2023-03-25',
    useCdn: 'true',
    token: process.env.SANITY_AUTH_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);