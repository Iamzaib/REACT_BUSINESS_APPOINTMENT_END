
import EventRepository from "./EventRepository";

const repositories = {
    event: EventRepository,
};
export const RepositoryFactory = {
    get: (name) => repositories[name],
};
