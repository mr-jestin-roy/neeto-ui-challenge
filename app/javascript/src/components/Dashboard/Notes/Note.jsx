import React from "react";

import dayjs from "dayjs";
import { MenuVertical, Clock } from "neetoicons";
import { Typography, Tag, Avatar, Dropdown, Tooltip } from "neetoui";

const Note = ({ note, setSelectedNoteIds, setShowDeleteAlert }) => (
  <div className="mb-3 w-full border border-gray-300 p-4 shadow-md">
    <div className="flex justify-between">
      <Typography style="h4">{note.title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <li>Edit the Note</li>
        <li
          onClick={() => {
            setSelectedNoteIds(note.id);
            setShowDeleteAlert(true);
          }}
        >
          Delete the Note
        </li>
      </Dropdown>
    </div>
    <div className="mb-2 mt-1">
      <Typography className="neeto-ui-text-gray-600" style="body2">
        {note.description}
      </Typography>
    </div>
    <hr />
    <div className="mt-3 flex justify-between">
      <Tag
        className="neeto-ui-bg-gray-200"
        // Change this line to show selected tags , keep this as default for now.
        label="Getting Started"
        size="small"
      />
      <div className="flex items-center space-x-2">
        <Clock size={15} />
        <Tooltip
          content={dayjs(note.created_at).format("dddd, hh:mmA")}
          position="top"
        >
          <Typography style="body3">
            Created {dayjs(note.created_at).fromNow()}
          </Typography>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            name: "Neeto UI",
            // Random Avatar profile picture generated from pravatar.cc
            imageUrl: "https://i.pravatar.cc/300",
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
