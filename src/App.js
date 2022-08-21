import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { TheContext } from "./context/context";
import Home from "./pages/Home/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <TheContext>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </QueryClientProvider>
      </TheContext>
    </>
  );
}

export default App;
