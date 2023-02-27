import { useState } from "react";

export function useForecast() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(false);

  return { isError, isLoading, forecast }
}