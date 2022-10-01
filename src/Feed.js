import image from './Im.jpg'
function Feed() {
    return(
        <div>
            <img src={image} alt="post" width="300px"/>
            <p>POST</p>
        </div>
    )
    
}
export default Feed;