function skillsMember() {
  return {
    name: "skillsMember",
    type: "member",
    title: "Skills Member",
    description: "A member with skills",
    properties: {
      skills: {
        type: "array",
        items: {
          type: "string"
        },
        description: "List of skills the member possesses"
      }
    },
    required: ["skills"]
  };
}
