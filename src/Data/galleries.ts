// general images
import image_main_logo      from '../Assets/images/main_logo.webp';

// images for about page
import image_profile_girl   from '../Assets/images/about/Girl.png';

// images for contact page
import image_contact        from '../Assets/images/contact/starmachine_transparent.webp';

// gallery images for illustrations
import image_ba_tacogirl    from '../Assets/images/illustrations/ba_tacogirl.png';
import image_fungi_girls    from '../Assets/images/illustrations/fungi_girls.webp';
import image_magical_portal from '../Assets/images/illustrations/magical_portal.webp';
import image_star_machine   from '../Assets/images/illustrations/star_machine.webp';
import image_may            from '../Assets/images/illustrations/may.png';
import image_chica_rosa     from '../Assets/images/illustrations/chica_rosa.png';
import image_autumn         from '../Assets/images/illustrations/autumn.png';

// gallery images for pets
import image_mei_mei        from '../Assets/images/pets/mei_mei.png';
import image_cookie         from '../Assets/images/pets/cookie.png';
import image_backpack       from '../Assets/images/pets/backpack.png'; 
import image_beach_neko     from '../Assets/images/pets/beach_neko.png';
import image_drive          from '../Assets/images/pets/drive.png'; 
import image_exotic         from '../Assets/images/pets/exotic.png'; 
import image_trek           from '../Assets/images/pets/trek.png';
import image_violin         from '../Assets/images/pets/violin.png';

// gallery images for fanarts
import image_inktober_2025_rowlet   from '../Assets/images/fanarts/inktober_2025_rowlet.png';
import image_mega_Altaria_high      from '../Assets/images/fanarts/mega_Altaria_high.png';
import image_darkrai_high           from '../Assets/images/fanarts/darkrai_high.png';
import image_dragon_high            from '../Assets/images/fanarts/dragon_high.png';
import image_pikachu_high           from '../Assets/images/fanarts/pikachu_high.png';
import image_mimikyu_high           from '../Assets/images/fanarts/mimikyu_high.png';
import image_jirachi_high           from '../Assets/images/fanarts/jirachi_high.png';
import image_meloeta_miku_high      from '../Assets/images/fanarts/meloeta_miku_high.png';

// gallery images for sketches
import image_two_demons                 from '../Assets/images/sketches/two_demons.png';
import image_fish                       from '../Assets/images/sketches/fish.png';
import image_hongos                     from '../Assets/images/sketches/hongos.png';
import image_miku                       from '../Assets/images/sketches/miku.png';
import image_maid_whitney               from '../Assets/images/sketches/maid_whitney.png';
import image_pocket_camp_lineart        from '../Assets/images/sketches/pocket_camp_lineart.png';
import image_pocket_camp_color          from '../Assets/images/sketches/pocket_camp_color.png';
import image_michi_blueflowers_lineart  from '../Assets/images/sketches/michi_blueflowers_lineart.png';

import { Artwork } from '../Types';

export {
    // general images
    image_main_logo,
    // images for about page
    image_mei_mei,
    // images for contact page
    image_contact,
    // images for main page gallery
    image_profile_girl,
    image_exotic,
    image_jirachi_high,
    image_two_demons,
};

export const galleries: Record<string, { title: string; images: Artwork[] }> = {
    'illustrations': { title: "Original Illustrations",
        images: [
            { id: 1, source: image_profile_girl, alt: 'Winged Girl', title: 'Winged Girl' },
            { id: 2, source: image_star_machine, alt: 'Star Machine', title: 'Star Machine' },
            { id: 4, source: image_fungi_girls, alt: 'Fungi Girls', title: 'Fungi Girls' },
            { id: 4, source: image_ba_tacogirl, alt: 'Tako Girl', title: 'Tako Girl' },
            { id: 5, source: image_chica_rosa, alt: 'Chica Rosa', title: 'Chica Rosa' },
            { id: 6, source: image_magical_portal, alt: 'Magical Portal', title: 'Magical Portal' },
            { id: 7, source: image_may, alt: 'May', title: 'May' },
            { id: 8, source: image_autumn, alt: 'Autumn', title: 'Autumn' },
        ]
    },
    'pets': { title: "Pets",
        images: [
            { id: 1, source: image_cookie, alt: 'Cookie', title: 'Cookie' },
            { id: 2, source: image_violin, alt: 'Violin', title: 'Violin' },
            { id: 3, source: image_exotic, alt: 'Exotic', title: 'Exotic' },
            { id: 4, source: image_beach_neko, alt: 'Beach Neko', title: 'Beach Neko' },
            { id: 5, source: image_trek, alt: 'Trek', title: 'Trek' },
            { id: 6, source: image_backpack, alt: 'Backpack', title: 'Backpack' },            
            { id: 7, source: image_mei_mei, alt: 'Mei Mei', title: 'Mei Mei' },            
            { id: 8, source: image_drive, alt: 'Drive', title: 'Drive' },
        ]
    },
    'fanarts': { title: "Fanarts",
        images: [
            { id: 1, source: image_darkrai_high, alt: 'Darkrai', title: 'Darkrai' },
            { id: 2, source: image_inktober_2025_rowlet, alt: 'Inktober 2025 Rowlet', title: 'Inktober 2025 Rowlet' },
            { id: 3, source: image_mega_Altaria_high, alt: 'Mega Altaria', title: 'Mega Altaria' },
            { id: 4, source: image_mimikyu_high, alt: 'Mimikyu', title: 'Mimikyu' },
            { id: 5, source: image_pikachu_high, alt: 'Pikachu', title: 'Pikachu' },
            { id: 6, source: image_jirachi_high, alt: 'Jirachi', title: 'Jirachi' },
            { id: 7, source: image_dragon_high, alt: 'Dragon', title: 'Dragon' },
            { id: 8, source: image_meloeta_miku_high, alt: 'Meloeta Miku', title: 'Meloeta Miku' },
        ]
    },
    'sketches': { title: "Sketches",
        images: [
            { id: 1, source: image_two_demons, alt: 'Two Demons', title: 'Two Demons' },
            { id: 2, source: image_miku, alt: 'Miku', title: 'Miku' }, 
            { id: 3, source: image_hongos, alt: 'Hongos', title: 'Hongos' },
            { id: 4, source: image_maid_whitney, alt: 'Maid Whitney', title: 'Maid Whitney' },
            { id: 5, source: image_pocket_camp_color, alt: 'Pocket Camp Color', title: 'Pocket Camp Color' },
            { id: 6, source: image_pocket_camp_lineart, alt: 'Pocket Camp Lineart', title: 'Pocket Camp Lineart' },
            { id: 7, source: image_fish, alt: 'Fish', title: 'Fish' },
            { id: 8, source: image_michi_blueflowers_lineart, alt: 'Michi Blueflowers Lineart', title: 'Michi Blueflowers Lineart' },
        ]
    }
};
