export const initialState = {
  theme: "dark",

  notifications: true,

  user: {
    name: "Ankit Kerketta",
    role: "Developer",
    online: true,
  },

  tasks: [
    {
      id: 1,
      title: "Design system audit",
      project: "Atlas",
      status: "In progress",
      priority: "High",
    },
    {
      id: 2,
      title: "Landing page review",
      project: "North",
      status: "Review",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Mobile navigation",
      project: "Atlas",
      status: "Done",
      priority: "Low",
    },
    {
      id: 4,
      title: "Analytics dashboard",
      project: "Signal",
      status: "In progress",
      priority: "High",
    },
  ],
};

export function reducer(state, action) {
  switch (action.type) {
    case "THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };

    case "NOTIFY":
      return {
        ...state,
        notifications: !state.notifications,
      };

    case "ONLINE":
      return {
        ...state,
        user: {
          ...state.user,
          online: !state.user.online,
        },
      };

    case "STATUS":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id
            ? {
                ...task,
                status: action.status,
              }
            : task
        ),
      };

    default:
      return state;
  }
}