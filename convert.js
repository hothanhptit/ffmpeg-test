var ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
// const ffprobePath = require('@ffprobe-installer/ffprobe').path;

const convert = (output) => {
  //   let wav = ffmpeg()
  //     .addInput("/2.mp3")
  //     .format("wav")
  //     .audioBitrate(64)
  //     .save(`${output}.wav`);
  //   let wav = ffmpeg().addInput("/1.mp3").audioBitrate(64);
  ffmpeg.setFfmpegPath(ffmpegPath);
  console.log('Converting file...');
  ffmpeg()
    .addInput("./1.mp3")
    .inputFormat("mp3")
    // .audioCodec("pcm_u8") //8bit unsigned
    .audioCodec("pcm_s16le")
    .format("wav")
    .audioChannels("1")
    // .audioBitrate(128)
    .audioFrequency(5678)
    // .audioFrequency(8000)
    
    // .native()
    .save(`./${output}.wav`);
  //   console.log(wav);
  return;
};

try {
  convert(5);
} catch (error) {
  console.log(error);
}
