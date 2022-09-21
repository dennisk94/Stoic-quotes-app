// Thumbnails of stoics
import marcusThumbnail from '../images/thumbnail/marcus.jpg';       // Marcus Aurelius Thumbnail
import senecaThumbnail from '../images/thumbnail/seneca.jpg';       // Seneca Thumbnail
import epictetusThumbnail from '../images/thumbnail/epictetus.jpg'; // Epictetus Thumbnail
import zenoThumbnail from '../images/thumbnail/zeno.jpg';           // Zeno Thumbnail
import catoThumbnail from '../images/thumbnail/cato.jpg';           // Cato Thumbnail

// Information pertaining to each stoic
// Sourced from Wikipedia
export const authorsData = [
    {
        id: 1,
        name: 'Marcus Aurelius',
        slug: 'Marcus Aurelius',
        title: 'Roman Emperor',
        born: 'April 26, 121 AD',
        death: 'March 17, 180 AD',
        thumbnail: marcusThumbnail,
        biography: 'Marcus Aurelius Antoninus was a Roman emperor from 161 to 180 and a Stoic philosopher. He was the last of the rulers known as the Five Good Emperors (a term coined some 13 centuries later by Niccolò Machiavelli), and the last emperor of the Pax Romana',
        externalResource: 'https://en.wikipedia.org/wiki/Marcus_Aurelius'
    },
    {
        id: 2,
        name: 'Seneca',
        slug: 'Seneca',
        title: 'Roman Stoic Philosopher',
        born: '4 BC',
        death: '65 AD',
        thumbnail: senecaThumbnail,
        biography: 'Lucius Annaeus Seneca the Younger usually known as Seneca, was a Roman Stoic philosopher, statesman, dramatist, and, in one work, satirist, from the post-Augustan age of Latin literature.',
        externalResource: 'https://en.wikipedia.org/wiki/Seneca_the_Younger'
    },
    {
        id: 3,
        name: 'Epictetus',
        slug: 'Epictetus',
        title: 'Greek Stoic Philosopher',
        born: '50 AD',
        death: '135 AD',
        thumbnail: epictetusThumbnail,
        biography: 'Epictetus was a Greek Stoic philosopher. He was born into slavery at Hierapolis, Phrygia (present-day Pamukkale, in western Turkey) and lived in Rome until his banishment, when he went to Nicopolis in northwestern Greece for the rest of his life. His teachings were written down and published by his pupil Arrian in his Discourses and Enchiridion.',
        externalResource: 'https://en.wikipedia.org/wiki/Epictetus'
    },
    {
        id: 4,
        name: 'Zeno',
        slug: 'Zeno',
        title: 'Stoic Philosopher',
        born: '334 BC',
        death: '262 BC',
        thumbnail: zenoThumbnail,
        biography: 'Zeno of Citium was a Hellenistic philosopher from Citium (Κίτιον, Kition), Cyprus.[4] Zeno was the founder of the Stoic school of philosophy, which he taught in Athens from about 300 BC. Based on the moral ideas of the Cynics, Stoicism laid great emphasis on goodness and peace of mind gained from living a life of virtue in accordance with nature.',
        externalResource: 'https://en.wikipedia.org/wiki/Zeno_of_Citium'
    },
    {
        id: 5,
        name: 'Cato',
        slug: 'Cato',
        title: 'Roman Stoic Senator',
        born: '95 BC',
        death: 'April 46 BC',
        thumbnail: catoThumbnail,
        biography: 'Marcus Porcius Cato "Uticensis", was an influential conservative Roman senator during the late Republic. A noted orator and a follower of Stoicism, his scrupulous honesty and professed respect for tradition gave him a powerful political following which he mobilized against powerful generals (including Julius Caesar and Pompey) of his day.',
        externalResource: 'https://en.wikipedia.org/wiki/Cato_the_Younger'
    },
];