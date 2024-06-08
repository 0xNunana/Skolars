'use client'
 
import { useParams } from 'next/navigation'
import { profiles } from '@/Data/ProfileList';
import { teams } from '@/Data/TeamList';
import Image from 'next/image';

const page = () => {
    const {slug} = useParams();
   
    const profile = profiles.find(pro => pro.link === slug);
    const team = teams.find(team=>team.link ===slug)

   
  
    return (
      <div className="mx-auto p-2 md:p-6 rounded-lg ">
        {profile &&  <div className="grid md:grid-cols-3 gap-5 pb-10 ">
            <div className='min-w-full '>
            <Image src={profile.image} alt={profile.name} width={700} height={700} className="object-cover min-w-full rounded-md shadow-md" />
            </div>
         
          <div className='col-span-2'>
            {/* bio */}
            <div className='md:min-h-[50%]'>
            <div className='flex flex-col md:flex-row md:gap-10 items-center'>
            <h1 className="text-3xl font-bold mb-4">{profile.name}</h1>
            <div className="flex space-x-4">
              <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Twitter
              </a>
              <a href={profile.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                Instagram
              </a>
            </div>
            </div>
    
            <p className="text-gray-700 mb-4 dark:text-white">{profile.bio}</p>
         
            </div>
{/* tracks */}
            <div className='  p-1 min-h-1/2 md:min-h-[50%] md:w-[30%] '>
<h1>Tracks</h1>
<ol className='  md:ml-2 space-y-3 p-1 '>
    {profile.tracks.map((item,i)=>(
        <li key={i} className={`px-2 py-1 rounded-md shadow-sm ${i % 2 === 0 ? 'bg-gray-300/50' : 'bg-white/50'}`}>{item} </li>
    ))}

</ol>
            </div>
          
          </div>
        </div>}
       {team && <div className="grid md:grid-cols-3 gap-5 pb-10 ">
            <div className='min-w-full '>
            <Image src={team.image} alt={team.name} width={700} height={700} className="object-cover min-w-full rounded-md shadow-md" />
            </div>
         
          <div className='col-span-2'>
            {/* bio */}
            <div className='md:min-h-[50%]'>
            <div className='flex flex-col md:flex-row md:gap-10 items-center'>
              <div className='relative'>
                <div className='flex justify-end'>
                <p className='text-white bg-black/20  px-3 rounded-full text-center dark:bg-white dark:text-black'>{team.position}</p>
                  </div>
              <h1 className="text-3xl font-bold mb-4">{team.name}</h1>

              </div>

            <div className="flex space-x-4">
              <a href={team.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Twitter
              </a>
              <a href={team.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                Instagram
              </a>
            </div>
            </div>
           
    
            <p className="text-gray-700 mb-4 dark:text-white">{team.bio}</p>
         
            </div>
{/* tracks */}
           
          </div>
        </div>}
      </div>
    );
}

export default page