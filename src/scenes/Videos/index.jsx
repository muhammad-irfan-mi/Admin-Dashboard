import { Box, IconButton, Typography } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "../../components/StatBox";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useEffect, useState } from "react";
import axios from "axios";
import BackspaceIcon from '@mui/icons-material/Backspace';


const Videos = () => {
  const [count, setCount] = useState(0)
  const [videos, setVideos] = useState([])
  // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/upload';
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACK_URL}/upload/videos/all`)
        const result = await response.data;
        console.log("Fetched data:", result);
        const updatedData = result.data.map(user => ({
          ...user,
          active: true
        }));

        setCount(result.count)
        console.log(updatedData)
        setVideos(updatedData);
      }
      catch (error) {
        console.error('Fetching data error', error);
      }
    }
    getData();
  }, [])
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const handleDeleteVideo = async (vidId) => {
    try {
      // Make a DELETE request to the API to delete the video by ID
      await axios.post(`http://localhost:5000/upload/delete/${vidId}`);
      
      // Remove the deleted video from the state
      setVideos((prevVideos) => prevVideos.filter((video) => video._id !== vidId));
      
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };
  return (
    <>

      <Box sx={{ height: "87vh", overflowY: "auto" }}>
        <Box m="20px">
          <Box
            display="grid"
            gridTemplateColumns="repeat(6, 3fr)"
            gridAutoRows="140px"
            gap="20px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gridColumn="span 6"
            >
              <Header title="TOTAL video" subtitle="Managing the All video" />
            </Box>
          </Box>
        </Box>

        <Box m="20px">
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
          >

            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                subtitle="Daily Video"
                title="40"
                icon={
                  <PlayCircleIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }


              />
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="90"
                subtitle="Weekly Video"
                icon={
                  <OndemandVideoIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }


              />
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="60"
                subtitle="Monthly Video"

                icon={
                  <VideoLibraryIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={count}
                subtitle="Total Video"
                icon={
                  <LibraryAddIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Box>
          <Box
            my="20px"
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            gap="20px"
          >
            {videos.map((video, index) => (
              <Box
                key={index}
                backgroundColor={colors.primary[400]}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding="10px"
              >

                <video
                  src={video.videoUrl}
                  width="100%"
                  height={"200px"}
                  style={{ objectFit: "cover" }}
                  controls
                ></video>                                                                                                  
                <Typography px={1} borderRadius={1} position={'relative'} zIndex={'1'} top={-200} left={134}>
                  <BackspaceIcon 
                  onClick={() => handleDeleteVideo(video._id)}
                  />
                </Typography>
              </Box>
            ))}
          </Box>

        </Box>
      </Box>
    </>

  );
  // https://www.google.com/search?q=animated+10+second+short+video&sca_esv=c1e74fbf460359a3&sca_upv=1&rlz=1C1CHBF_enPK1119PK1119&biw=1366&bih=607&tbm=vid&sxsrf=ADLYWIKHT5tSyeTHUo3gKu_A35JsqfaaTA%3A1721820242023&ei=UuSgZveIAbqKkdUPypChkAM&oq=animated++10+secondvideo&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhhhbmltYXRlZCAgMTAgc2Vjb25kdmlkZW8qAggAMgoQIRigARjDBBgKMgoQIRigARjDBBgKSLUlUOgGWKcZcAB4AJABAJgBmwKgAYwVqgEEMi0xMbgBA8gBAPgBAZgCBqACiwzCAgUQABiABMICBBAAGB7CAgYQABgeGA_CAgYQABgFGB7CAgYQABgHGB7CAggQABgHGAgYHsICChAAGAgYDRgeGA_CAgsQABiABBiGAxiKBcICCBAhGKABGMMEmAMAiAYBkgcDMi02oAelPg&sclient=gws-wiz-video#
};

export default Videos;
