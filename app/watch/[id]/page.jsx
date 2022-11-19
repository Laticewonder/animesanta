const Watch = async ({params:{id}}) => {
    const res = await fetch(`https://api.consumet.org/meta/anilist/watch/${id}`)
    const data = await res.json()
    // console.log(data)
    return (
        
        <div className="watch">
            {/* <video src={data.headers.Referer} className='w-[1100px] h-[650px]'></video> */}
            <iframe src={data.headers.Referer} className='w-[1100px] h-[650px]' allow="fullscreen" frameborder="0"></iframe>
        </div>
    );
}

export default Watch;