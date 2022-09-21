import Marcus from '../images/thumbnail/marcus.jpg';       // Marcus Aurelius Thumbnail
import Seneca from '../images/thumbnail/seneca.jpg';       // Seneca Thumbnail
import Epictetus from '../images/thumbnail/epictetus.jpg'; // Epictetus Thumbnail
import Cato from '../images/thumbnail/cato.jpg';           // Zeno Thumbnail
import Zeno from '../images/thumbnail/zeno.jpg';           // Cato Thumbnail
  
// Use author_id to programmatically display thumbnail
export const handleThumbnail = ( author_id ) => {
    switch (author_id) {
        case 1:
        return <img src={ Marcus } alt='thumbnail'/>;
        case 2:
        return <img src={ Seneca } alt='thumbnail'/>;
        case 3: 
        return <img src={ Epictetus } alt='thumbnail'/>;
        case 4:
        return <img src={ Cato } alt='thumbnail'/>;
        case 5:
        return <img src={ Zeno } alt='thumbnail'/>;
        default:
    }
}