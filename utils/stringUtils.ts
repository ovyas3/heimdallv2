export const toTitleCase = (text: any): string => {
    if (text === null || text === undefined || typeof text !== 'string') {
        return '';
    }
    if (text.trim() === '') {
        return '';
    }

    return text.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
};

export const isDeliveryToJajpur = (deliveries?: any[]): boolean => {
    return (
        deliveries?.some((d: any) => {
            const name = String(d?.location?.name || '').trim().toLowerCase();
            const ref = String(d?.location?.reference || '').trim().toLowerCase();
            return name === 'jajpur' || ref === 'jajpur';
        }) ?? false
    );
};

export const isJslJajpurShipper = (shipper: any): boolean => {
    return String(shipper?._id || shipper || '') === '694b847f2a7c87efd3fe4f09';
};

export const isJslOutboundShipment = (shipper: any, deliveries?: any[]): boolean => {
    return isJslJajpurShipper(shipper) && !isDeliveryToJajpur(deliveries);
};

