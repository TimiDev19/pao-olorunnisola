import Image from 'next/image';
import Link from 'next/link';

const people=[
  {name:'Joanna Jesutomi Olowo',role:'Legal Practitioner',image:'/joanna-jesutomi-olowo.jpg',href:'/people/joanna-jesutomi-olowo',alt:'Joanna Jesutomi Olowo in legal dress'},
  {name:'Jimoh Kofoworola Rofiat',role:'Junior Counsel',image:'/jimoh-kofoworola-rofiat.jpg',href:'/people/jimoh-kofoworola-rofiat',alt:'Jimoh Kofoworola Rofiat in legal dress'},
];

function PeopleSet({clone=false}:{clone?:boolean}){return <div className="people-carousel-set" aria-hidden={clone||undefined}>{people.map(person=><Link key={person.name} href={person.href} tabIndex={clone?-1:undefined} className="people-carousel-card group"><div className="relative h-full w-full overflow-hidden bg-[#dfdbd1]"><Image src={person.image} alt={clone?'':person.alt} fill sizes="(max-width: 700px) 78vw, 380px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172733]/90 via-[#172733]/35 to-transparent px-6 pb-6 pt-16 text-white"><p className="font-serif text-2xl">{person.name}</p><p className="mt-1 text-[10px] uppercase tracking-[.16em] text-white/75">{person.role}</p></div></div></Link>)}</div>}

export default function PeopleCarousel(){return <div className="people-carousel" aria-label="Portraits of the firm’s people"><div className="people-carousel-track"><PeopleSet/><PeopleSet clone/></div></div>}
