import axios from 'axios'

const Video = (props) => (
    <div>
      <h1 style={{ textAlign: 'center' }}>{props.title}</h1>

      <div style={{ width: '50%', margin: '0 auto' }}>
        <video width="100%" controls="true">
          <source src={"http://localhost/api/videos/view/" + props.id} type="video/mp4" />
        </video>
      </div>

      <div style={{ width: '50%', margin: '0 auto', textAlign: 'center' }}>
        <h3>Commentarios</h3>
        <div>
          <p>Commentario</p>
          <p>
            - @author
          </p>
        </div>
      </div>
    </div>
)

export async function getServerSideProps({ params }) {
    const video = await axios.get('http://localhost/api/videos/' + params.id)

    console.log(video.data)

    if (!video) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            id: params.id,
            ...video.data,
        }
    }
}

export default Video
