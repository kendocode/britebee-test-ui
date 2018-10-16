import { API_BASE_URL } from "../config";

export const FETCH_BOARD_DATA_SUCCESS = "FETCH_BOARD_DATA_SUCCESS";
/* export function fetchBoardDataSuccess(data) {
   return {
     type: FETCH_BOARD_DATA_SUCCESS,
     data
   }
 } */
/*   export const fetchBoardDataSuccess = data => ({
      type: FETCH_BOARD_DATA_SUCCESS,
      data
  });
 */

export const FETCH_BOARD_DATA_ERROR = "FETCH_BOARD_DATA_ERROR";
export const fetchBoardDataError = error => ({
  type: FETCH_BOARD_DATA_ERROR,
  error
});

export const fakeData = {
  lanes: [
    {
      id: "lane1",
      title: "Planned Tasks",
      label: "2/2",
      cards: [
        {
          id: "Card1",
          title: "Write Blog",
          description: "Can AI make memes",
          label: "30 mins"
        },
        {
          id: "Card2",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          label: "5 mins",
          metadata: { sha: "be312a1" }
        }
      ]
    },
    {
      id: "lane2",
      title: "Completed",
      label: "0/0",
      cards: []
    }
  ]
};

export const newFakeData = 
  {
    lanes: [
      {
        id: "PLANNED",
        title: "Planned Tasks",
        "label": "20/70",
        "style": {"width": 280},
        "cards": [
          {
            "id": "Milk",
            "title": "Buy milk",
            "label": "15 mins",
            "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
            "description": "2 Gallons of milk at the Deli store"
          },
          {
            "id": "Plan2",
            "title": "Dispose Garbage",
            "label": "10 mins",
            "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
            "description": "Sort out recyclable and waste as needed"
          },
          {
            "id": "Plan3",
            "title": "Write Blog",
            "label": "30 mins",
            "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
            "description": "Can AI make memes?"
          },
          {
            "id": "Plan4",
            "title": "Pay Rent",
            "label": "5 mins",
            "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
            "description": "Transfer to bank account"
          }
        ]
      },
      {
        "id": "WIP",
        "title": "Work In Progress",
        "label": "10/20",
        "style": {"width": 280},
        "cards": [
          {
            "id": "Wip1",
            "title": "Clean House",
            "label": "30 mins",
            "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
            "description": "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses"
          }
        ]
      },
      {
        "id": "BLOCKED",
        "title": "Blocked",
        "label": "0/0",
        "style": {"width": 280},
        "cards": []
      },
      {
        "id": "COMPLETED",
        "title": "Completed",
        "style": {"width": 280},
        "label": "2/5",
        "cards": [
          {
            "id": "Completed1",
            "title": "Practice Meditation",
            "label": "15 mins",
            "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
            "description": "Use Headspace app"
          },
          {
            "id": "Completed2",
            "title": "Maintain Daily Journal",
            "label": "15 mins",
            "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
            "description": "Use Spreadsheet for now"
          }
        ]
      },
      {
        "id": "REPEAT",
        "title": "Repeat",
        "style": {"width": 280},
        "label": "1/1",
        "cards": [
          {
            "id": "Repeat1",
            "title": "Morning Jog",
            "label": "30 mins",
            "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
            "description": "Track using fitbit"
          }
        ]
      },
      {
        "id": "ARCHIVED",
        "title": "Archived",
        "style": {"width": 280},
        "label": "1/1",
        "cards": [
          {
            "id": "Archived1",
            "title": "Go Trekking",
            "label": "300 mins",
            "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
            "description": "Completed 10km on cycle"
          }
        ]
      },
      {
        "id": "ARCHIVED2",
        "title": "Archived2",
        "style": {"width": 280},
        "label": "1/1",
        "cards": [
          {
            "id": "Archived1",
            "title": "Go Trekking",
            "label": "300 mins",
            "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
            "description": "Completed 10km on cycle"
          }
        ]
      },
      {
        "id": "ARCHIVED3",
        "title": "Archived3",
        "style": {"width": 280},
        "label": "1/1",
        "cards": [
          {
            "id": "Archived1",
            "title": "Go Trekking",
            "label": "300 mins",
            "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
            "description": "Completed 10km on cycle"
          }
        ]
      }
    ]
  }


export function fetchBoardData() {
  return newFakeData;
}

/* export function fetchApiData() {
  console.log("Fetching");
  return fetch(`${API_BASE_URL}/fakedata`, {
    method: "GET",
    headers: {
      Accept: "application.vnd.api.v1+/json",
      "Content-Type": "application/json; charset=utf-8"
    },
    mode: "cors"
  }).then(function(response) {
    //console.log(response.json());
    return response.json();
  })
} */

/*   export function fetchBoardData() {
     const authToken = store.getState().auth.authToken;
     console.log(authToken);
    return fakeData;
  };
 */

/* export const fetchBoardData = () => (dispatch, getState) => {
    //dispatch(fetchBoardDataSuccess({fakeData}));
  return fakeData
} */
