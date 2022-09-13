import React from "react";

import AvatarProfile from "images/AvatarProfile";
import { MenuVertical, Clock } from "neetoicons";
import { Typography, Tag, Avatar, Dropdown, Tooltip } from "neetoui";

import { calculateCreatedAgo, convertDateToWeekdayTime } from "./utils";

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
        // TODO : Change this line to show selected tags , keep this as default for now.
        label="Getting Started"
        size="small"
      />
      <div className="flex items-center space-x-2">
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
          size="small"
          user={{
            name: "neetoUI",
            imageUrl: AvatarProfile,
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
