
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Next Js | About-Us',
    description: 'Next JS Application Build by another engineer || Details about the project and team members',
}

export default function AboutUs(){
    return (
        <>
        <div className="center-layout">
            <div className="flex-column p-10 text-justify">
                <h2 className="mb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officiis eos libero nihil! Labore modi animi, autem consequuntur adipisci officia a fugiat alias ab iure officiis. Nobis reiciendis expedita a provident, mollitia distinctio deleniti, blanditiis, hic deserunt id eaque sequi unde totam voluptatem velit tempora dolores quae? Laboriosam, sequi suscipit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores nesciunt architecto! Eum est cupiditate aperiam corrupti esse quaerat sed dolores voluptas, necessitatibus natus. Explicabo, provident! Distinctio corporis eum, dolore libero fugiat ipsa repudiandae quia! Dolorem reprehenderit minima et, soluta exercitationem ullam consequatur, officiis eaque perspiciatis nisi ea earum voluptates?</p>
            </div>

            <div  className="flex-column p-10 text-justify">
                <h2 className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et, asperiores aut pariatur enim maiores illo eligendi, possimus eaque, recusandae maxime quae illum beatae excepturi!</p>

            </div>

            <div  className="flex-column p-10">
                <h2 className="mb-10">Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium harum, alias ab provident quam!</p>

            </div>

            <div  className="flex-column p-10">
                <h2 className="mb-10">Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, veritatis!</p>

            </div>
        </div>
        
        </>
    )
}