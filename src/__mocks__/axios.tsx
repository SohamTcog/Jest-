interface Picture {
    large: string;
  }
  
  interface Name {
    first: string;
    last: string;
  }
  
  interface Login {
    username: string;
  }
  
  interface Result {
    name: Name;
    picture: Picture;
    login: Login;
  }
  
  interface MockResponse {
    data: {
      results: Result[];
    };
  }
  
  const mockResponse: MockResponse = {
    data: {
      results: [
        {
          name: {
            first: "Laith",
            last: "Harb"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/59.jpg"
          },
          login: {
            username: "ThePhonyGOAT"
          }
        }
      ]
    }
  };
  
  const mockAxios = {
    get: jest.fn().mockResolvedValue(mockResponse)
  };
  
  export default mockAxios;
  