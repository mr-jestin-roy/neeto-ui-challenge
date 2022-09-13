import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoMenuBar } from "neetoui/layouts";

import { MenuBarBlocks } from "./constants";

const MenuBar = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <NeetoMenuBar showMenu title="Notes">
        {MenuBarBlocks.main.map(menubarBlock => (
          <NeetoMenuBar.Block
            active={menubarBlock.active}
            count={menubarBlock.count}
            key={menubarBlock.label}
            label={menubarBlock.label}
          />
        ))}
        <NeetoMenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSearchCollapsed(
                  prevSearchCollapsed => !prevSearchCollapsed
                ),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </NeetoMenuBar.SubTitle>
        <NeetoMenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        {MenuBarBlocks.segments.map(menubarBlock => (
          <NeetoMenuBar.Block
            count={menubarBlock.count}
            key={menubarBlock.label}
            label={menubarBlock.label}
          />
        ))}
        <NeetoMenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
            },
            {
              icon: Plus,
            },
            {
              icon: Settings,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </NeetoMenuBar.SubTitle>
        {MenuBarBlocks.tags.map(menubarBlock => (
          <NeetoMenuBar.Block
            count={menubarBlock.count}
            key={menubarBlock.label}
            label={menubarBlock.label}
          />
        ))}
      </NeetoMenuBar>
    </div>
  );
};

export default MenuBar;
