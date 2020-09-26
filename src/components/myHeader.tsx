import React from "react"
import tw, { css, styled } from "twin.macro"

const MyHeader = () => {
    const [expanded, setExpanded] = React.useState<boolean>(false);
  return (
    <header css={[tw`flex justify-between bg-teal-400 px-3 py-3 lg:items-center lg:flex-row flex-col`]}>
      <div css={[tw`text-white lg:mr-6 flex flex-row items-center`]}>
        <div css={[tw`font-semibold`]}>The Bible</div>
        <div css={[tw`lg:hidden self-end ml-auto`]}>
          <button onClick={() => setExpanded(!expanded)} css={[tw`px-3 py-2 border rounded text-teal-200 border-teal-400 inline-flex items-center hover:text-white hover:border-white`]}>
            <svg
              css={[tw`fill-current h-3 w-3`]}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div css={[tw`flex lg:flex-row flex-col flex-grow text-teal-200 overflow-hidden`, !expanded && tw`hidden`]}>
        <a css={[tw`block mr-4 text-teal-200 hover:underline hover:text-white cursor-pointer`]}>Link 1</a>
        <a css={[tw`block mr-4 text-teal-200 hover:underline hover:text-white cursor-pointer`]}>Link 2</a>
        <a css={[tw`block mr-4 text-teal-200 hover:underline hover:text-white cursor-pointer`]}>Link 3</a>
      </div>
    </header>
  )
}

export default MyHeader
