import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./deatail";
import Search from "./Search";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div>
          <header>
            <Link to={`/`}>Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/detail/:id" element={<Details />} />
            <Route path="/" element={<Search />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
