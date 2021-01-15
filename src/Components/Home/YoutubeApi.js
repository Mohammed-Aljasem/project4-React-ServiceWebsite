import React from "react";
import YoutubeVideo from "./YoutubeVideos";
class YoutubeAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      videos: [],
    };
  }
  async componentDidMount() {
    const url =
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=4&playlistId=PLiaQFNWw2w6rwNrpjSFyLoGj89ZnceP56&key=AIzaSyB67B_szVr6uSIUounQ8IR2xsErKFv1pBU";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ videos: data.items });
  }
  render() {
    const { videos } = this.state;
    const renderedVideos = videos.map((video, index) => {
      return <YoutubeVideo key={video.id} video={video} />;
    });
    return (
      <div className="videos__container">
        <h3 style={{ textAlign: "center", paddingTop: "3rem" }}>
          Watch driving online lessons{" "}
        </h3>
        <div>{renderedVideos}</div>
      </div>
    );
  }
}
export default YoutubeAPI;