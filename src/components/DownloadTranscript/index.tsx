import React, { useState, useLayoutEffect, useRef } from 'react';
// import { ScrollView, ScrollViewHandle } from '../ScrollView/ScrollView';
// import { QuickReply, QuickReplyItemProps } from './QuickReply';

export interface DownloadTranscriptProps {
  //   items: QuickReplyItemProps[];
  //   visible?: boolean;
  //   onClick: (item: QuickReplyItemProps, index: number) => void;
  //   onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
}

const DownloadTranscript = (props: DownloadTranscriptProps) => {
  return (
    <>
      <DownloadTranscript />
      <p>HI C:</p>
    </>
    // <ScrollView
    //   className="QuickReplies"
    //   data={items}
    //   itemKey="name"
    //   ref={scroller}
    //   data-visible={visible}
    //   onScroll={scrollEvent ? onScroll : undefined}
    //   renderItem={(item: DownloadTranscriptProps, index) => (
    //     <DownloadTranscript item={item} index={index} onClick={onClick} key={item.name} />
    //   )}
    // />
  );
};

// QuickReplies.defaultProps = {
//   items: [],
//   visible: true,
// };

export default React.memo(DownloadTranscript);
