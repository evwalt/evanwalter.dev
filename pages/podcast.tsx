import PodcastAppearance from 'components/PodcastAppearance'

export default function podcast() {
  return (
    <div className='flex flex-col gap-y-8'>
      <h1 className='text-3xl font-bold sm:text-4xl'>Podcast</h1>
      <PodcastAppearance />
    </div>
  )
}
