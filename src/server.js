import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const channels = [
  {
    id: 1,
    title: "Channel 1",
    messages: [
      { id: 1, content: "The weather is really freezing!" },
      { id: 2, content: "Water is wet" },
      { id: 3, content: "The grass is green" },
      { id: 4, content: "Ice skating is a popular winter sport in finland" },
    ],
  },
  {
    id: 2,
    title: "Channel 2",
    messages: [
      { id: 12, content: "Kimi Räikkönen was popular F1 driver." },
      { id: 22, content: "Pizza can be easily baked at home" },
      {
        id: 31,
        content:
          "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine",
      },
      { id: 46, content: "Express is a web application framework for nodsjs" },
    ],
  },
  {
    id: 3,
    title: "Channel 3",
    messages: [
      { id: 19, content: "Nvidia is a major manufacturer of GPUS" },
      { id: 5, content: "Lissabon is the capital of Portugal" },
      { id: 6, content: "VsCode is a hugely popular code editor." },
      { id: 7, content: "IBM has it's roots in the 19th century." },
    ],
  },
];

app.get("/", (request, response) => {
  response.status(200);
  response.send("Hello World!");
});
app.get("/channels", (request, response) => {
  response.json(channels);
});
app.get("/messages/:channel", (request, response) => {
  const channelId = request.params.channel;
  const channelMessages = channels.find((channel) => channel.id == channelId);
  response.json(channelMessages);
});
app.post("/:channel", (request, response) => {
  const channelId = request.params.channel;
  const message = request.body;
  const searchedChannel = channels.find((channel) => channel.id == channelId);
  searchedChannel.messages = [...searchedChannel.messages, message];
  response.status(200);
});
const PORT = 3001;

app.listen(PORT, () => {
  console.log("SERVER RUNNING ON PORT", { PORT });
});
