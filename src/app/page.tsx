

// export default function Checking_The_API() {
//   return (
//     <div>
//       <h3>this is space id [{process.env.CONTENTFUL_SPACE_ID}] of this project in contentfull</h3>
//       <h3>this is access key [{process.env.CONTENTFUL_ACCESS_KEY}] of this project in contentfull</h3>
//     </div>
//   )
// }





// async function getBlogs() {
//   const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`);
  
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

// export default async function Home() {
//   const blogs = await getBlogs();
//   return (
//     <ul>
//       {blogs.items.map((item: any) => (
//         <li>{item.fields.title}</li>
//       ))}
//     </ul>
//   )
// }


import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blogComplex`, { cache: 'no-store' });
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div>
      {
        blogs.items.map((item: any) => (
          <>
            <div>{item.fields.title}</div>
            <div>{documentToReactComponents(item.fields.description)}</div>
            <div>{blogs.includes.Asset.map((a: any) => (
              <>
              <div>
                {item.fields.img.sys.id == a.sys.id? 
                <Image src={"https:" + a.fields.file.url} alt="" width="100" height="100"/>: <div></div>}
              </div>
              <div>
                Author: {a.fields.title}
                <br />
                Description: {a.fields.description}
              </div>
              </>
            ))}
            </div>
            <br/>
            <br/>
            <br/>
          </>
      ))}
    </div>
  )
}









