import api from "../api/api.ts";
import { HomeWorld } from "../types/HomeWorld.ts";
import { PageResult } from "../types/PageResult.ts";
import { People } from "../types/People.ts";

export const searchPeoples = async (
  page: number = 1
): Promise<PageResult<People>> => {
  const response = await api.get<PageResult<People>>(`/people?page=${page}`);
  return response.data;
};

export const getPeopleById = async (id: string): Promise<People> => {
  const response = await api.get<People>("/people/" + id);
  return response.data;
};

export const getHomeWorldById = async (id: string): Promise<HomeWorld> => {
  const response = await api.get<HomeWorld>("/planets/" + id);
  return response.data;
};

export const getFilmById = async (id: string) => {
  const response = await api.get(`/films/${id}`);
  return response.data;
};

export const getSpeciesById = async (id: string) => {
  const response = await api.get(`/species/${id}`);
  return response.data;
};

export const getStarshipById = async (id: string) => {
  const response = await api.get(`/starships/${id}`);
  return response.data;
};

export const getVehicleById = async (id: string) => {
  const response = await api.get(`/vehicles/${id}`);
  return response.data;
};
