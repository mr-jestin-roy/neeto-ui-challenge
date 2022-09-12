import React from "react";

import { Clock } from "neetoicons";
import { Typography, Tag, Avatar, Tooltip } from "neetoui";

import { calculateCreatedAgo, convertDateToWeekdayTime } from "./utils";

const Note = ({ note }) => (
  <div className="m-3 w-full space-y-2 border-2 p-3 shadow-md">
    <Typography style="h4">{note.title}</Typography>
    <Typography className="text-gray-500" style="body2">
      {note.description}
    </Typography>
    <hr />
    <div className="flex justify-between">
      <Tag className="bg-gray-100 text-gray-500" label="Getting Started" />
      <div className="ml-auto flex items-center space-x-2">
        <Clock size={15} />
        <Tooltip
          content={convertDateToWeekdayTime(note.updated_at)}
          position="bottom"
        >
          <Typography style="body3">
            Created {calculateCreatedAgo(note.created_at)}
          </Typography>
        </Tooltip>
        <Avatar
          user={{
            // Random Avatar profile picture generated from pravatar.cc
            imageUrl: "https://i.pravatar.cc/300",
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
