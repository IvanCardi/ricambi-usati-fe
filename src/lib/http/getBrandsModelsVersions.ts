import { Brand } from "../models/brand";
import { Model } from "../models/model";
import { Version } from "../models/version";

export const getBrandsModelsVersions = async (): Promise<{
  brands: Brand[];
  models: Model[];
  versions: Version[];
}> => {
  const obj = await fetch(`${process.env.BE_BASE_URL}/brandsmodelsversions`, {
    next: { tags: ["car-parts"], revalidate: 0 },
  });

  return await obj.json();
};
