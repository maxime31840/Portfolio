import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function CalendarGithub() {
  return (
    <div className="flex flex-col items-center pb-10 p-24">
      <h1 className="text-2xl font-bold text-white pb-5">
        Days I <span className="text-blue-500">Code</span>
      </h1>
      <GitHubCalendar
        username="Maxime31840"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        style={{ color: "white" }}
      />
    </div>
  );
}