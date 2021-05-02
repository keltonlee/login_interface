var back = {
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        //width: "100%",
        //height: "400px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
  }
  export default function backGround() {
    return(
        <div style={back}></div>
    );
  }