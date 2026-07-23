import { site } from './site';

export function calcQuote(input: {
  grade: string;
  volume: number;
  distanceKm: number;
  withDelivery: boolean;
}) {
  const item = site.grades.find((g) => g.grade === input.grade);
  if (!item || !(input.volume > 0)) return null;

  const material = item.price * input.volume;
  let delivery = 0;

  if (input.withDelivery) {
    if (input.volume >= site.deliveryPricing.freeFromM3) {
      delivery = 0;
    } else {
      delivery = Math.max(
        site.deliveryPricing.minFee,
        input.distanceKm * site.deliveryPricing.pricePerKm,
      );
    }
  }

  return {
    material,
    delivery,
    total: material + delivery,
    pricePerM3: item.price,
    name: item.name,
  };
}
