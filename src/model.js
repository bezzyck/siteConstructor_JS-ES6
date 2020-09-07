import image from './assets/img_1.jpg'
import {TitleBlock, TextBlock, TextColumnsBlock, ImageBlock} from './classes/block'
import {css} from './utilts'


export const model = [
    new TitleBlock ('Конструктор сайтов на "ванильном JS"', {
        tag: 'h2',
        styles: css( {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1rem',
            'text-align': 'center',
        })
    }),
    new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit placeat quod sint', {
        styles: css( {
                 color: 'black',
                 padding: '1rem',
                 'text-align': 'center'
             })
    }),
    new TextColumnsBlock(['Text 1', 'Text 2', 'Text 3'], {
        styles: css( {
            padding: '1rem',
            border: '1px solid',
            'text-align': 'center'
        })
    }),
    new ImageBlock (image, {
        styles: css( {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        }),
        alt: 'my img',
        imageStyles: 'height: 300px;'
    }),
]